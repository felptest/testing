"use client";
import React, { ChangeEvent, useCallback, useEffect, useMemo } from 'react';
import { useState } from 'react';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import styles from './page.module.css'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";

import { Octokit } from "@octokit/rest";
/* import Octokit from "@octokit/rest"; */

import bnccData from "../../app/api/data/bncc.json"
import topicGeneralData from "../../app/api/data/experimentGeneralData.json"
import axios from 'axios';

// Crie uma instância do Octokit
const octokit = new Octokit();

//Preciso colocar essa logica no home

interface Topic {
  id: number;
  title: string;
  slug: string;
}

interface SpecificTopic {
  id: number;
  title: string;
  slug: string;
}

interface BnccTopic {
  id: number;
  title: string;
  slug: string;
}

export default function Experiment() { 
  
  const [experimentBnccData] = useState(bnccData);
  const [experimentGeneralData] = useState(topicGeneralData);
  const [copied, setCopied] = useState(false); 
  const [apiToken, setApiToken] = useState(
    typeof localStorage !== 'undefined' ? localStorage.getItem('githubApiToken') || '' : ''
  );
  
  const [username, setUsername] = useState('');
  
  const [experimentData, setExperimentData] = useState({
    id: '',
    topicGeneral: [], // Alterado para uma lista
    topicSpecific: [],
    topicBncc: [],
    profileName: '',
    postDate: '',
    title: '',
    slug: '',
    imagePreview: '',
    description: '',
    literature: '',
    objectives: [],
    materials: [],
    methods: [],
    methodsImages: [],
    results: '',
    scientificExplanation: '',
    references: [],
  });
  
  const handleGeneralSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    const selectedTopic = experimentGeneralData.find((topic) => topic.slug === value);
  
    if (selectedTopic) {
      const isTopicAlreadySelected = experimentData.topicGeneral.some(
        (topic: any) => topic.title === selectedTopic.title
      );
  
      if (!isTopicAlreadySelected) {
        setExperimentData((prevData: any) => ({
          ...prevData,
          topicGeneral: [
            ...prevData.topicGeneral,
            {
              id: selectedTopic.id,
              title: selectedTopic.title,
              slug: selectedTopic.slug,
            },
          ],
          topicSpecific: {
            ...prevData.topicSpecific,
            [selectedTopic.slug]: [],
          },
        }));
      }
    }
  
    event.target.value = ''; // Limpa o valor selecionado
  };
  
  const handleSpecificSelectChange = (event: ChangeEvent<HTMLSelectElement>, generalTopicSlug: any) => {
    const { value } = event.target;
    const selectedSpecificTopic = experimentGeneralData
      .find((topic) => topic.slug === generalTopicSlug)
      ?.topicSpecific.find((topic) => topic.slug === value);
  
    if (selectedSpecificTopic) {
      setExperimentData((prevData: any) => {
        const updatedTopicSpecific = {
          ...prevData.topicSpecific,
          [generalTopicSlug]: [
            ...(prevData.topicSpecific[generalTopicSlug] as any || []),
            {
              id: selectedSpecificTopic.id,
              title: selectedSpecificTopic.title,
              slug: selectedSpecificTopic.slug,
            },
          ],
        };
  
        return {
          ...prevData,
          topicSpecific: updatedTopicSpecific,
        };
      });
    }
  
    event.target.value = ''; // Limpa o valor selecionado
  };

  const handleSelectBnccChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    const selectedTopic = experimentBnccData.find((topic: BnccTopic) => topic.slug === value);
  
    if (selectedTopic) {
      const isTopicAlreadySelected = experimentData.topicBncc.some(
        (topic: any) => topic.title === selectedTopic.title
      );
  
      if (!isTopicAlreadySelected) {
        setExperimentData((prevData: any) => ({
          ...prevData,
          topicBncc: [
            ...prevData.topicBncc,
            {
              id: selectedTopic.id,
              title: selectedTopic.title,
              slug: selectedTopic.slug,
            },
          ],
        }));
      }
    }
  
    event.target.value = ""; // Limpa o valor selecionado
  };
  
  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = event.target;
  
    setExperimentData({
      ...experimentData,
      [name]: value,
    });
  };

  const handleArrayInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
  
    setExperimentData({
      ...experimentData,
      [name]: value.split(',').map((item) => item.trim()),
    });
  };
  
  const handleRemoveGeneralTopic = (id: number, generalTopicSlug: any) => {
    setExperimentData((prevData) => {
      const updatedTopicSpecific = { ...prevData.topicSpecific };
      delete updatedTopicSpecific[generalTopicSlug];
  
      return {
        ...prevData,
        topicGeneral: prevData.topicGeneral.filter((topic: Topic) => topic.id !== id),
        topicSpecific: updatedTopicSpecific,
      };
    });
  };
  
  const handleRemoveSpecificTopic = (id: number, generalTopicSlug: any) => {
    setExperimentData((prevData: any) => ({
      ...prevData,
      topicSpecific: {
        ...prevData.topicSpecific,
        [generalTopicSlug]: prevData.topicSpecific[generalTopicSlug].filter(
          (topic: SpecificTopic) => topic.id !== id
        ),
      },
    }));
  };

  const handleRemoveDivBncc = (id: number) => {
    setExperimentData((prevData) => ({
      ...prevData,
      topicBncc: prevData.topicBncc.filter((topic: Topic) => topic.id !== id), // Remove a div com o id correspondente
    }));
  };
  
  const isGeneralTopicSelected = (slug: any) => {
    return experimentData.topicGeneral.some((topic: Topic) => topic.slug === slug);
  };
  
  const isSpecificTopicSelected = (slug: any) => {
    return Object.values(experimentData.topicSpecific).some((topics: SpecificTopic[]) =>
      topics.some((topic: SpecificTopic) => topic.slug === slug)
    );
  };

  const isTopicSelectedBncc = (slug: any) => {
    return experimentData.topicBncc.some((topic: BnccTopic) => topic.slug === slug);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const experimentJson = JSON.stringify({
      ...experimentData,
    });
    console.log(experimentJson);
  };

  const handleGenerateId = useMemo(() => {
    return () => {
      const date = new Date();
      const formattedDate = format(date, "dd 'de' MMMM 'de' yyyy 'às' HH:mm 'horário local.'", { locale: ptBR });
      setExperimentData((prevData) => ({
        ...prevData,
        id: Date.now().toString(),
        postDate: formattedDate,
      }));
    };
  }, []);

  
  const handleApiTokenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const token = event.target.value; 
  setApiToken(token);
  localStorage.setItem('githubApiToken', token);
};

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = await testApiToken(apiToken);
    if (user) {
      setUsername(user);
    }
  };

  const handleBackToHome = () => {
  setUsername('')
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // limpa o estado após 2 segundos
  };
  
  async function handleSend() {
  const octokitClient = new Octokit({
    auth: apiToken
  });

  const branchName = "test";
  const filePath = "src/app/api/data/experimentos.json";
  const fileContent = JSON.stringify(experimentData, null, 2);

  const { data: branch } = await octokitClient.git.getRef({
    owner: "Fellippemfv",
    repo: "project-science-1",
    ref: `heads/test`,
  });


  const sha = branch.object.sha;

    if (!branch) {
    // a branch não existe, então crie-a
    const { data: newBranch } = await octokitClient.git.createRef({
      owner: "Fellippemfv",
      repo: "project-science-1",
      ref: `heads/test`,
      sha
    });
  } else {
    // a branch já existe, então use sua referência
  }
  

  await octokitClient.git.updateRef({
    owner: "Fellippemfv",
    repo: "project-science-1",
    ref: `heads/test`,
    sha,
  });

// busca o conteúdo atual do arquivo
const fileInfo = await octokitClient.repos.getContent({
  owner: "Fellippemfv",
  repo: "project-science-1",
  path: filePath,
  ref: branchName,
});

// decodifica o conteúdo atual para uma string
const currentContent: string | undefined = Array.isArray(fileInfo.data)
  ? undefined
  : fileInfo.data.type === "file" && fileInfo.data.content
    ? Buffer.from(fileInfo.data.content, "base64").toString()
    : undefined;


// converte o conteúdo atual em um array de objetos JSON
const currentArray = currentContent ? JSON.parse(currentContent) : [];

// converte o novo conteúdo em um objeto JSON
const newObject = JSON.parse(fileContent);

// adiciona o novo objeto ao array existente
currentArray.push(newObject);

// converte o array atualizado de volta em uma string JSON
const updatedContent = JSON.stringify(currentArray, null, 2);  

// atualiza o conteúdo do arquivo
// atualiza o conteúdo do arquivo

const data = await octokitClient.repos.createOrUpdateFileContents({
  owner: "Fellippemfv",
  repo: "project-science-1",
  path: filePath,
  message: "Update my-file.json",
  content: Buffer.from(updatedContent).toString("base64"),
  branch: branchName,
  sha: branch.object.sha, // Acessando o campo "sha"
});
  }

  const generateSlug = useCallback(() => {
    const specialCharsMap: {[key: string]: string} = {
      á: 'a',
      à: 'a',
      ã: 'a',
      â: 'a',
      é: 'e',
      ê: 'e',
      í: 'i',
      ó: 'o',
      õ: 'o',
      ô: 'o',
      ú: 'u',
      ü: 'u',
      ç: 'c',
    };
  
    const titleWithoutSpecialChars = experimentData.title
      .toLowerCase()
      .replace(/[^\w\s]/gi, (match: string) => {
        const replacement = specialCharsMap[match];
        return replacement ? replacement : '';
      });
  
    return titleWithoutSpecialChars
      .replace(/\s+/g, '-')
      .replace(/^-+|-+$/g, '');
  }, [experimentData.title]);
  
  useEffect(() => {
    setExperimentData((prevData) => ({
      ...prevData,
      slug: generateSlug(),
    }));
  }, [experimentData.title, generateSlug]);

  useEffect(() => {
    handleGenerateId();
  }, [handleGenerateId]);
  
  async function testApiToken(apiToken: string) {
    try {
      const response = await axios.get('https://api.github.com/user', {
        headers: {
          Authorization: `token ${apiToken}`,
        },
      }); 
      return response.data.login;
    } catch (error) {
      console.error('Erro ao testar a chave da API:', error);
      return null;
    }
  }




  return (
    <>

    <div className={styles.container}>

    <div>
    {username && <p>Agora voce esta habilitado para enviar seu experimento!</p>}
    {username && <p>Nome de usuário: {username}</p>}
    {username && <button onClick={handleBackToHome} >Volte o teste</button>}


      {username && <p>Nome de usuário: {username}</p> &&     <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          ID:
          <input className={styles.input} type="text" name="postDate" value={experimentData.id} onChange={handleInputChange} disabled />

        </label>
       


        <div>
        <label className={styles.label}>
  <div>
    <label htmlFor="topicGeneral">Tópico Geral:</label>
    <select
      id="topicGeneral"
      onChange={handleGeneralSelectChange}
      name="topicGeneral"
      defaultValue=""
      className={styles.select}
    >
      <option value="">Selecione um tópico</option>
      {experimentGeneralData.map((topic) => (
        <option
          key={topic.id}
          value={topic.slug}
          disabled={isGeneralTopicSelected(topic.slug)}
          className={styles.option}
        >
          {topic.title}
        </option>
      ))}
    </select>
    <div className={styles.topicDivContainer}>
  {experimentData.topicGeneral.map((topic: Topic) => (
    <div key={topic.id} className={styles.topicDiv}>
      {topic.title}
      <button
        onClick={() => handleRemoveGeneralTopic(topic.id, topic.slug)}
        className={styles.closeButton}
      >
        X
      </button>
    </div>
  ))}
</div>


    {experimentData.topicGeneral.length === 0 && (
      <div className={`${styles.errorMessage} ${styles.errorMessageContainer}`}>
        Selecione pelo menos um tópico geral
      </div>
    )}
  </div>
</label>


  {experimentData.topicGeneral.length > 0 && (
  <>
    {experimentData.topicGeneral.map((generalTopic: any) => {
      const specificTopics = experimentGeneralData.find(
        (topic) => topic.slug === generalTopic.slug
      )?.topicSpecific;

      const selectedSpecificTopics = (
        experimentData.topicSpecific[generalTopic.slug] || []
      ) as SpecificTopic[];
      

      return (
        <div key={generalTopic.slug}>
          <label>
            <div>
              <label htmlFor={`topicSpecific-${generalTopic.slug}`} className={styles.subLabel}>
                Tópico Específico de {generalTopic.title}:
              </label>
              <select
                id={`topicSpecific-${generalTopic.slug}`}
                onChange={(event) => handleSpecificSelectChange(event, generalTopic.slug)}
                name="topicSpecific"
                defaultValue=""
                disabled={isSpecificTopicSelected(generalTopic.slug)}
                className={styles.select}
              >
                <option value="">Selecione um tópico</option>
                {specificTopics &&
                  specificTopics.map((specificTopic) => {
                    const isTopicSelected = selectedSpecificTopics.some(
                      (topic) => topic.slug === specificTopic.slug
                    );

                    return (
                      <option
                        key={specificTopic.id}
                        value={specificTopic.slug}
                        disabled={isSpecificTopicSelected(specificTopic.slug) || isTopicSelected}
                        className={styles.option}
                      >
                        {specificTopic.title}
                      </option>
                    );
                  })}
              </select>

              <div className={styles.topicDivContainer}>
                {selectedSpecificTopics.map((topic: SpecificTopic) => (
                  <div key={topic.id} className={styles.topicDiv}>
                    {topic.title}
                    <button
                      onClick={() => handleRemoveSpecificTopic(topic.id, generalTopic.slug)}
                      className={styles.closeButton}
                    >
                      X
                    </button>
                  </div>
                ))}

                {selectedSpecificTopics.length === 0 && (
                  <div className={`${styles.errorMessage} ${styles.errorMessageContainer}`}>
                    Escolha pelo menos um tópico de {generalTopic.title}
                  </div>
                )}
              </div>
            </div>
          </label>
        </div>
      );
    })}
  </>
)}



      </div>




      <label className={styles.label}>
  <div className={styles.filter}>
    <label htmlFor="topicBncc">BNCC Topic</label>
    <select
      id="topicBncc"
      onChange={handleSelectBnccChange}
      name="topicBncc"
      className={styles.select}
      defaultValue=""
    >
      <option value="">Selecione um tópico</option>
      {experimentBnccData.map((topic) => (
        <option
          key={topic.id}
          value={topic.slug}
          disabled={isTopicSelectedBncc(topic.slug)}
        >
          {topic.title}
        </option>
      ))}
    </select>

    <div className={styles.topicDivContainer}>
      {experimentData.topicBncc.map((topic: BnccTopic) => (
        <div key={topic.id} className={styles.topicDiv}>
          {topic.title}
          <button onClick={() => handleRemoveDivBncc(topic.id)} className={styles.closeButton}>
            X
          </button>
        </div>
      ))}

      {experimentData.topicBncc.length === 0 && (
        <div className={`${styles.errorMessage} ${styles.errorMessageContainer}`}>
          Selecione pelo menos um tópico BNCC
        </div>
      )}
    </div>
  </div>
</label>




     
        <label className={styles.label}>
          Profile Name:
          <input className={styles.input} type="text" name="profileName" onChange={handleInputChange} />
        </label>
        <label className={styles.label}>
          Post Date:
          <input className={styles.input} type="text" name="postDate" value={experimentData.postDate} onChange={handleInputChange} disabled />
        </label>
        <label className={styles.label}>
          Title:
          <input className={styles.input} type="text" name="title" onChange={handleInputChange} />
        </label>
        <label className={styles.label}>
          Slug:
          <input className={styles.input} type="text" name="slug" value={generateSlug()} onChange={handleInputChange} disabled />
        </label>
        <label className={styles.label}>
          Image Preview:
          <input className={styles.input} type="text" name="imagePreview" onChange={handleInputChange} />
        </label>
        <label className={styles.label}>
          Description:
          <textarea className={styles.textarea} name="description" onChange={handleInputChange} />
        </label>
        <label className={styles.label}>
          Literature:
          <textarea className={styles.textarea} name="literature" onChange={handleInputChange} />
        </label>
        <label className={styles.label}>
          Objectives:
          <input className={styles.input} type="text" name="objectives" onChange={handleArrayInputChange} />
        </label>
        <label className={styles.label}>
          Materials:
          <input className={styles.input} type="text" name="materials" onChange={handleArrayInputChange} />
        </label>
        <label className={styles.label}>
          Methods:
          <input className={styles.input} type="text" name="methods" onChange={handleArrayInputChange} />
        </label>
        <label className={styles.label}>
          MethodsImages:
          <input className={styles.input} type="text" name="methodsImages" onChange={handleArrayInputChange} />
        </label>
        <label className={styles.label}>
          Results:
          <textarea className={styles.textarea} name="results" onChange={handleInputChange} />
        </label>
        <label className={styles.label}>
          ScientificExplanation:
          <textarea className={styles.textarea} name="scientificExplanation" onChange={handleInputChange} />
        </label>
        <label className={styles.label}>
          References:
          <input className={styles.input} type="text" name="references" onChange={handleArrayInputChange} />
        </label>
      </form>}

      
      {!username && (
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="apiTokenInput">Insira sua chave API do GitHub</label>
            <input
              type="text"
              id="apiTokenInput"
              value={apiToken}
              onChange={handleApiTokenChange}
            />
          </div>
          <button type="submit">Testar chave</button>
        </form>
      )}
      {/* Resto do código... */}
    </div>





    {Object.keys(experimentData).length > 0 && (
      <>
        <div className="d-flex justify-content-end">
          <CopyToClipboard text={JSON.stringify(experimentData, null, 2)}>
            <button className="btn btn-outline-primary me-2" onClick={handleCopy}>
              {copied ? "Copiado!" : "Copiar"}
              <FaCopy className="ms-2" />
            </button>
          </CopyToClipboard>
        </div>
        <SyntaxHighlighter language="json" style={dracula}>
          {JSON.stringify(experimentData, null, 2)}
        </SyntaxHighlighter>
      </>
    )}

<button className="btn btn-primary" onClick={handleSend}>
              Enviar
            </button>
    </div>
    
  
    </>
  
  )
}

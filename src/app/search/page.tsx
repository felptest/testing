"use client";
import React, { useEffect } from 'react';
import { useState } from 'react';

//Preciso colocar essa logica no home!

export default function Experiment() {
 
  const [experimentData, setExperimentData] = useState({
    id: '',
    topicGeneral: '',
    topicSpecific: '',
    topicBncc: '',
    profileImage: '',
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setExperimentData({
      ...experimentData,
      [name]: value,
    });
  };

  const handleArrayInputChange = (event) => {
    const { name, value } = event.target;

    setExperimentData({
      ...experimentData,
      [name]: value.split(',').map((item) => item.trim()),
    });
  };

  const specialCharsMap = {
    'á': 'a',
    'à': 'a',
    'ã': 'a',
    'â': 'a',
    'é': 'e',
    'ê': 'e',
    'í': 'i',
    'ó': 'o',
    'õ': 'o',
    'ô': 'o',
    'ú': 'u',
    'ü': 'u',
    'ç': 'c',
  };
  
  const generateSlug = () => {
    const titleWithoutSpecialChars = experimentData.title
      .toLowerCase()
      .replace(/[^\w\s]/gi, (match) => specialCharsMap[match] || '');
  
    return titleWithoutSpecialChars
      .replace(/\s+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const experimentJson = JSON.stringify({
      ...experimentData,
    });
    console.log(experimentJson);
  };

  const handleGenerateId = () => {
    setExperimentData({
      ...experimentData,
      id: Date.now().toString(),
    });
  };

  useEffect(() => {
    setExperimentData({
      ...experimentData,
      slug: generateSlug(),
    });
  }, [experimentData.title]);

  
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        ID:
        <button onClick={handleGenerateId}>Generate ID</button>
      </label>
      <label>
        General Topic:
        <input type="text" name="topicGeneral" onChange={handleInputChange} />
      </label>
      <label>
        Specific Topic:
        <input type="text" name="topicSpecific" onChange={handleInputChange} />
      </label>
      <label>
        BNCC Topic:
        <input type="text" name="topicBncc" onChange={handleInputChange} />
      </label>
      <label>
        Profile Image:
        <input type="text" name="profileImage" onChange={handleInputChange} />
      </label>
      <label>
        Profile Name:
        <input type="text" name="profileName" onChange={handleInputChange} />
      </label>
      <label>
        Post Date:
        <input type="text" name="postDate" onChange={handleInputChange} />
      </label>
      <label>
        Title:
        <input type="text" name="title" onChange={handleInputChange} />
      </label>
      <label>
        Slug:
        <input type="text" name="slug" value={generateSlug()} onChange={handleInputChange} disabled />
      </label>
      <label>
        Image Preview:
        <input type="text" name="imagePreview" onChange={handleInputChange} />
      </label>
      <label>
        Description:
        <textarea name="description" onChange={handleInputChange} />
      </label>
      <label>
        Literature:
        <textarea name="literature" onChange={handleInputChange} />
      </label>
      <label>
        Objectives:
        <input type="text" name="objectives" onChange={handleArrayInputChange} />
      </label>
      <label>
        Materials:
        <input type="text" name="materials" onChange={handleArrayInputChange} />
      </label>
      <label>
        Methods:
        <input type="text" name="methods" onChange={handleArrayInputChange} />
      </label>
      <label>
      MethodsImages:
        <input type="text" name="methodsImages" onChange={handleArrayInputChange} />
      </label>
      <label>
      Results:
        <textarea name="results" onChange={handleInputChange} />
      </label>
      <label>
      ScientificExplanation:
        <textarea name="scientificExplanation" onChange={handleInputChange} />
      </label>
      <label>
      References:
        <input type="text" name="references" onChange={handleArrayInputChange} />
      </label>
    </form>

      {Object.keys(experimentData).length > 0 && (
        <pre>{JSON.stringify(experimentData, null, 2)}</pre>
      )}
    </>
  
  )
}

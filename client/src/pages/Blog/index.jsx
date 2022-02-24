import React, { useState, useEffect } from 'react';

function Blog() {

  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  // const URL = process.env.URL;
  // console.log("URL",URL)

  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
    }

    try {
      fetch(`http://localhost:1337/api/articles?populate=*`, {
        method: 'GET',
        headers: headers,
      }).then(res => res.json()).then((res) => {
        setArticles(res.data);
      })
    } catch (error) {
      setError(error);
    }
  }, []);

  console.log("articles", articles)

  const mapArticles = articles.map(article =>
  <li key={article.id}>
    <h3>{article.attributes.titre}</h3>
    <img src={`http://localhost:1337/uploads/Super_heros_Marvel_bb598b3094.jpg`}></img>
    <p>{article.attributes.date}</p>
    <ul>
      {article.attributes.categories.data.map(category => <li>#{category.attributes.name}</li>)}
    </ul>
  </li>);

  return (
    <ul>
      {mapArticles}
    </ul>
  )

}

export default Blog;

// Faire une section "les derniers articles"
// Articles les plus lus
// liste d'article

//Pour chaque article : thumbnail : photo, titre, date, catégorie


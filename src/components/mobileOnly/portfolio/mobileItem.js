import React from "react";


export default function MobileItem(props) {
  const { title, description, category, repoURL, projectURL, language, languagedetail, date, imgURL } = props.item;

  return (
    <div className="mobile-project-wrapper">
      <img src={imgURL} alt="image for project" className="mobile-project-image" />
      <div className="mobile-project-title">{title}</div>
      <div className="mobile-project-date">{date}</div>

      {
  (category === "Web" || category === "Software") ? (
    <div className="mobile-project-language-wrapper">
      <div className="mobile-project-language">{language}</div>
      <div className="mobile-project-languagedetail">{languagedetail}</div>
    </div>
    ) : (
    <div className="mobile-project-language-wrapper">
      <div className="mobile-project-language-article">{language}</div>
    </div>
  )
}

{
  (category === "Web" || category === "Software") ? (
    projectURL !== repoURL ? (
      <div className="mobile-project-links-wrapper">
        <div className="mobile-project-item-link-wrapper">
          <a href={projectURL} className="link">Project Link</a>
        </div>
        <div className="mobile-project-item-repo-link-wrapper">
          <a href={repoURL} className="link">Repository Link</a>
        </div>
      </div>
    ) : (
      <div className="mobile-project-item-sole-link-wrapper">
        <a href={projectURL} className="link">Repository Link</a>
      </div>
    )
  ) : (
    <div className="mobile-project-article-link">
      <a href={projectURL} className="article-link">Read the Article Here</a>
    </div>
  )
}


      

      <div className="mobile-project-item-description">{description}</div>
    </div>
  );
}
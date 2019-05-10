import React from "react";

import styles from "./page.module.scss";
import ideas from "./ideas.json";

import SEO from "../components/seo";
import PageHeader from "../components/pageHeader/pageHeader";
import Card from "../components/card/card";
import Footer from "../components/footer/footer";

const IdeasPage = () => (
  <>
    <SEO title="Ideas" />
    <PageHeader title="Ideas">
      <h2>Want to play with serverless technology?</h2>
      <p>That's a great way to learn. Here are some ideas.</p>
    </PageHeader>

    <div className={styles.grid}>
      {ideas.map(idea => (
        <Card
          icon={idea.icon}
          title={idea.title}
          topics={idea.topics}
          html={idea.description}
        />
      ))}
    </div>

    <Footer />
  </>
);

export default IdeasPage;

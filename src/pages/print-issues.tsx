import React, { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { PrintIssueCard } from "../components/PrintIssues/PrintIssueCard";
import { styled } from "../stitches.config";
import { H1, H3 } from "../components/Heading";
import { fetchIssues } from "../utils/fetchIssues";

const Wrapper = styled("div", {
  padding: "50px",
});

const IssuesHolder = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr) )",
});

const Subtitle = styled(H3, {
  fontWeight: "$semibold",
});

const PrintIssues = () => {
  const [issues, setIssues] = useState(false);

  useEffect(() => {
    fetchIssues();
  }, []);

  return (
    <Layout>
      <Wrapper>
        <H1>Print Issues</H1>
        <Subtitle>Checkout all our print issues... digitally</Subtitle>
        <IssuesHolder>
          <PrintIssueCard
            title="title"
            date="date"
            link="/"
            image="https://image.issuu.com/191216222225-43b0edd974edf32300ab32fc2ade72c8/jpg/page_1_thumb_large.jpg"></PrintIssueCard>
          <PrintIssueCard
            title="title"
            date="date"
            link="/"
            image="https://image.issuu.com/191216222225-43b0edd974edf32300ab32fc2ade72c8/jpg/page_1_thumb_large.jpg"></PrintIssueCard>
          <PrintIssueCard
            title="title"
            date="date"
            link="/"
            image="https://image.issuu.com/191216222225-43b0edd974edf32300ab32fc2ade72c8/jpg/page_1_thumb_large.jpg"></PrintIssueCard>
          <PrintIssueCard
            title="title"
            date="date"
            link="/"
            image="https://image.issuu.com/191216222225-43b0edd974edf32300ab32fc2ade72c8/jpg/page_1_thumb_large.jpg"></PrintIssueCard>
          <PrintIssueCard
            title="title"
            date="date"
            link="/"
            image="https://image.issuu.com/191216222225-43b0edd974edf32300ab32fc2ade72c8/jpg/page_1_thumb_large.jpg"></PrintIssueCard>
          <PrintIssueCard
            title="title"
            date="date"
            link="/"
            image="https://image.issuu.com/191216222225-43b0edd974edf32300ab32fc2ade72c8/jpg/page_1_thumb_large.jpg"></PrintIssueCard>
          <PrintIssueCard
            title="title"
            date="date"
            link="/"
            image="https://image.issuu.com/191216222225-43b0edd974edf32300ab32fc2ade72c8/jpg/page_1_thumb_large.jpg"></PrintIssueCard>
          <PrintIssueCard
            title="title"
            date="date"
            link="/"
            image="https://image.issuu.com/191216222225-43b0edd974edf32300ab32fc2ade72c8/jpg/page_1_thumb_large.jpg"></PrintIssueCard>
        </IssuesHolder>
      </Wrapper>
    </Layout>
  );
};

export default PrintIssues;

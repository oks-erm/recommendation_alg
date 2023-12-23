import React from 'react';
import styled from 'styled-components';


const ContentListWrapper = styled.div`
  padding: 1rem;
  background-color: #001434;
`;

const SectionTitle = styled.h2`
  color: #f8fafb;
  font-size: 22px;
  padding: 0 20px;
  margin-bottom: 1rem;
`;

const CardBase = styled.div`
  background-color: #09294d;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  padding: 1rem;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const CardTitle = styled.h3`
  margin: 0;
  color: #7bf1ff;
`;

const CardContent = styled.p`
  color: #f8fafb;
`;

const TextSection = styled.section`
  margin-bottom: 2rem;
`;

const TextCard = styled(CardBase)`
  margin-bottom: 1rem;
`;

const VideoSection = styled.section`
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1rem;
  justify-items: center; 
  align-items: start; 

  > *:first-child { 
    grid-column: 1 / -1;
    justify-self: start;
  }
`;

const VideoCard = styled(CardBase)`
  height: 220px;
`;

const ContentList = () => {
    return (
        <ContentListWrapper>
            <TextSection>
                <SectionTitle>Latest News</SectionTitle>
                <TextCard>
                    <CardTitle>AI Breakthrough in 2024</CardTitle>
                    <CardContent>Details about a major breakthrough in AI technology...</CardContent>
                </TextCard>
                <TextCard>
                    <CardTitle>AGI can't be bothered</CardTitle>
                    <CardContent>Details about a major breakthrough in AI technology...</CardContent>
                </TextCard>
                <TextCard>
                    <CardTitle>Sam Altman is too boring even for AI</CardTitle>
                    <CardContent>Details about a major breakthrough in AI technology...</CardContent>
                </TextCard>
                <TextCard>
                    <CardTitle>AI Breakthrough in 2023</CardTitle>
                    <CardContent>Details about a major breakthrough in AI technology...</CardContent>
                </TextCard>
            </TextSection>

            <VideoSection>
                <SectionTitle>Tutorials and Guides</SectionTitle>
                <VideoCard>
                    <CardTitle>Getting Started with Machine Learning</CardTitle>
                    <CardContent>A beginner's guide to entering the world of machine learning...</CardContent>
                </VideoCard>
                <VideoCard>
                    <CardTitle>Getting Started with Machine Learning</CardTitle>
                    <CardContent>A beginner's guide to entering the world of machine learning...</CardContent>
                </VideoCard>
                <VideoCard>
                    <CardTitle>Getting Started with Machine Learning</CardTitle>
                    <CardContent>A beginner's guide to entering the world of machine learning...</CardContent>
                </VideoCard>
                <VideoCard>
                    <CardTitle>Getting Started with Machine Learning</CardTitle>
                    <CardContent>A beginner's guide to entering the world of machine learning...</CardContent>
                </VideoCard>
                <VideoCard>
                    <CardTitle>Getting Started with Machine Learning</CardTitle>
                    <CardContent>A beginner's guide to entering the world of machine learning...</CardContent>
                </VideoCard>
            </VideoSection>

            <VideoSection>
                <SectionTitle>Podcasts and Interviews</SectionTitle>
                <VideoCard>
                    <CardTitle>Lex Fridamn finally navidated a conversation</CardTitle>
                    <CardContent>A beginner's guide to entering the world of machine learning...</CardContent>
                </VideoCard>
                <VideoCard>
                    <CardTitle>Elon Musk told everyone to fuck off</CardTitle>
                    <CardContent>A beginner's guide to entering the world of machine learning...</CardContent>
                </VideoCard>
                <VideoCard>
                    <CardTitle>Lex Fridamn finally navidated a conversation</CardTitle>
                    <CardContent>A beginner's guide to entering the world of machine learning...</CardContent>
                </VideoCard>
                <VideoCard>
                    <CardTitle>Elon Musk told everyone to fuck off</CardTitle>
                    <CardContent>A beginner's guide to entering the world of machine learning...</CardContent>
                </VideoCard>
                <VideoCard>
                    <CardTitle>Elon Musk told everyone to fuck off</CardTitle>
                    <CardContent>A beginner's guide to entering the world of machine learning...</CardContent>
                </VideoCard>
            </VideoSection>

            <TextSection>
                <SectionTitle>Research Papers and Articles</SectionTitle>
                <TextCard>
                    <CardTitle>Scientists have finally discovered everything</CardTitle>
                    <CardContent>A beginner's guide to entering the world of machine learning...</CardContent>
                </TextCard>
                <TextCard>
                    <CardTitle>The latest thing</CardTitle>
                    <CardContent>A beginner's guide to entering the world of machine learning...</CardContent>
                </TextCard>
                <TextCard>
                    <CardTitle>Scientists have finally discovered everything</CardTitle>
                    <CardContent>A beginner's guide to entering the world of machine learning...</CardContent>
                </TextCard>
                <TextCard>
                    <CardTitle>The latest thing</CardTitle>
                    <CardContent>A beginner's guide to entering the world of machine learning...</CardContent>
                </TextCard>
            </TextSection>

            <VideoSection>
                <SectionTitle>Tools and Resources</SectionTitle>
                <VideoCard>
                    <CardTitle>Clever AI thing does everything</CardTitle>
                    <CardContent>A beginner's guide to entering the world of machine learning...</CardContent>
                </VideoCard>
                <VideoCard>
                    <CardTitle>Just look at that, the best tool ever</CardTitle>
                    <CardContent>A beginner's guide to entering the world of machine learning...</CardContent>
                </VideoCard>
                <VideoCard>
                    <CardTitle>Clever AI thing does everything</CardTitle>
                    <CardContent>A beginner's guide to entering the world of machine learning...</CardContent>
                </VideoCard>
                <VideoCard>
                    <CardTitle>Just look at that, the best tool ever</CardTitle>
                    <CardContent>A beginner's guide to entering the world of machine learning...</CardContent>
                </VideoCard>
                <VideoCard>
                    <CardTitle>Just look at that, the best tool ever</CardTitle>
                    <CardContent>A beginner's guide to entering the world of machine learning...</CardContent>
                </VideoCard>
            </VideoSection>

{/* 
            <Section>
                <SectionTitle>Video Lectures and Seminars</SectionTitle>
                <Card>
                    <CardTitle>Scientists have finally discovered everything</CardTitle>
                    <CardContent>A beginner's guide to entering the world of machine learning...</CardContent>
                </Card>
                <Card>
                    <CardTitle>The latest thing</CardTitle>
                    <CardContent>A beginner's guide to entering the world of machine learning...</CardContent>
                </Card>
            </Section> */}

        </ContentListWrapper>
    );
};

export default ContentList;
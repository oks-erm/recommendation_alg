import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


const ContentListWrapper = styled.div`
  padding: 1rem;
  background: linear-gradient(180deg, #0b0e37, 5%, #121212, #121212, #121212);
`;

const SectionTitle = styled.h2`
  font-family: 'Ubuntu', sans-serif;
  color: #f8fafb;
  font-size: 24px;
  padding: 0 20px;
  margin-bottom: 1rem;
  letter-spacing: 0.3px;
`;

const CardBase = styled.div`
  font-family: 'Lato', sans-serif;
  background-color: rgba(156,182,211, 0.07);
  border-radius: 5px;
  box-shadow: 3px 4px 4px 2px rgba(5, 52, 80, 0.15);
  padding: 0.7rem 1.2rem;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const CardTitle = styled.h3`
  margin: 0;
  color: #dddddd;
  font-size: 1.1rem; 
  letter-spacing: -0.8px;
  font-family: 'Montserrat', sans-serif;
`;

const CardContent = styled.p`
  color: #a7a7a7;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: ${2 * 1.2}em;
  margin: 0.2em 0 0.4em 0;
  font-size: 0.95em;
`;

const TextSection = styled.section`
  margin-bottom: 2rem;
  padding: 0 20px;
`;

const ScrollContainer = styled.div`
  overflow-x: auto;
  display: flex;
  gap: 15px;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;  
  scrollbar-width: none;  
`;

const AutoWrappingGrid = styled.div`
  display: grid;
  grid-auto-columns: 46vw; 
  grid-template-rows: repeat(3, auto);
  grid-auto-flow: column; 
  grid-gap: 15px;
  width: max-content;
`;

const TextCard = styled(CardBase)`
  min-width: 330px;
  &:last-child {
    margin-bottom: 0; 
  }
`;

const VideoSection = styled.section`
  margin-bottom: 2rem;
  overflow-x: auto;
  white-space: nowrap;

  .title {
    padding-left: 20px;
  }

  .scroll-container {
    overflow-x: auto;
    white-space: nowrap;
    padding: 5px 0 0 20px; 
  }

  > *:first-child { 
    grid-column: 1 / -1;
    justify-self: start;
    display: block;
  }
`;

const VideoCard = styled(CardBase)`
  display: inline-block;
  width: 250px;
  height: 220px;
  margin-right: 1em;
  padding: 1.2em 1em;

  ${CardTitle}, ${CardContent} { 
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }
`;

const VideoPreview = styled.div`
  background-color: #000; 
  background-image: url('https://picsum.photos/200/300'); 
  background-size: cover;
  height: 140px; 
  margin: 10px 0;
  border-radius: 4px;
//   border-top-right-radius: 8px;
`;

const ContentList = () => {
    const [contentData, setContentData] = useState({
        latestNews: [],
        tutorials: [],
        podcastsIntervies: [],
        papersArticles: [],
        lecturesSeminars: [],
        resources: []
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/all-content'); 
                const data = await response.json();
                setContentData({
                    latestNews: data.latestNews,
                    tutorials: data.tutorials,
                    podcastsInterviews: data.podcastsIntervies,
                    papersArticles: data.papersArticles,
                    lecturesSeminars: data.lecturesSeminars,
                    resources: data.resources
                });
            } catch (error) {
                console.error('Error fetching content:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <ContentListWrapper>
            <TextSection>
                <div className="title">
                <SectionTitle>Latest News</SectionTitle>
                </div>
                <ScrollContainer>
                    <AutoWrappingGrid>
                        {contentData.latestNews.map((newsItem, index) => (
                            <TextCard key={index}>
                                <CardTitle>{newsItem.title}</CardTitle>
                                <CardContent>{newsItem.content}</CardContent>
                            </TextCard>
                        ))}
                    </AutoWrappingGrid>
                </ScrollContainer>
            </TextSection>

            <VideoSection>
                <div className="title">
                <SectionTitle>Tutorials and Guides</SectionTitle>
                </div>
                <div className="scroll-container">
                    {contentData.tutorials.map((tutorialsItem, index) => (
                        <VideoCard key={index}>
                            <CardTitle>{tutorialsItem.title}</CardTitle>
                            <VideoPreview />
                            <CardContent>{tutorialsItem.content}</CardContent>
                        </VideoCard>
                    ))}
                </div>
            </VideoSection>

            <VideoSection>
                <div className="title">
                    <SectionTitle>Podcasts and Interviews</SectionTitle>
                </div>
                <div className="scroll-container">
                    {contentData.podcastsIntervies.map((podcastsInterviesItem, index) => (
                        <VideoCard key={index}>
                            <CardTitle>{podcastsInterviesItem.title}</CardTitle>
                            <VideoPreview />
                            <CardContent>{podcastsInterviesItem.content}</CardContent>
                        </VideoCard>
                    ))}
                </div>
            </VideoSection>

            <TextSection>
                <div className="title">
                <SectionTitle>Research Papers and Articles</SectionTitle>
                </div>
                <ScrollContainer>
                    <AutoWrappingGrid>
                        {contentData.papersArticles.map((papersItem, index) => (
                            <TextCard key={index}>
                                <CardTitle>{papersItem.title}</CardTitle>
                                <CardContent>{papersItem.content}</CardContent>
                            </TextCard>
                        ))}
                    </AutoWrappingGrid>
                </ScrollContainer>
            </TextSection>

            <VideoSection>
                <div className="title">
                    <SectionTitle>Lectures and Seminars</SectionTitle>
                </div>
                <div className="scroll-container">
                    {contentData.lecturesSeminars.map((lecturesSeminarsItem, index) => (
                        <VideoCard key={index}>
                            <CardTitle>{lecturesSeminarsItem.title}</CardTitle>
                            <VideoPreview />
                            <CardContent>{lecturesSeminarsItem.content}</CardContent>
                        </VideoCard>
                    ))}
                </div>
            </VideoSection>

            <TextSection>
                <div className="title">
                    <SectionTitle>Tools and Resources</SectionTitle>
                </div>
                <ScrollContainer>
                    <AutoWrappingGrid>
                        {contentData.resources.map((resourcesItem, index) => (
                            <TextCard key={index}>
                                <CardTitle>{resourcesItem.title}</CardTitle>
                                <CardContent>{resourcesItem.content}</CardContent>
                            </TextCard>
                        ))}
                    </AutoWrappingGrid>
                </ScrollContainer>
            </TextSection>

        </ContentListWrapper>
    );
};

export default ContentList;
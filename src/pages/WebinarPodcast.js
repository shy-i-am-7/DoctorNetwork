import React, { useState, useEffect } from 'react';
import './WebinarPodcast.css';
import WebinarPodcastService from '../services/webinar-podcast.service.js';
import { useTheme } from '../ThemeContext';
import { useNavigate } from 'react-router-dom';


export default function WebinarPodcast() {
    const { isPhysician, toggleTheme} = useTheme(); // Use ThemeContext to get isPhysician
    const [podcasts, setPodcasts] = useState([]);
    const [webinars, setWebinars] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(); // For navigation


    useEffect(() => {
        // Set the theme based on isPhysician
        document.documentElement.setAttribute('data-theme', isPhysician ? 'physician' : 'resident');
    }, [isPhysician]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [podcastsData, webinarsData] = await Promise.all([
                    WebinarPodcastService.fetchPodcasts(),
                    WebinarPodcastService.fetchWebinars()
                ]);
                setPodcasts(podcastsData);
                setWebinars(webinarsData);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const getYouTubeVideoId = (url) => {
        const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[7].length === 11) ? match[7] : false;
    };

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="container">
            <div className="box">
                <h2 className="title">Podcast Episodes</h2>
                <div class="button-container-1">
                <a href="https://open.spotify.com/show/1NAJ6C06ZY9okz4ekuiXqQ?si=77d61a92cd444e70" className="dn-contact-cta-button-3">Spotify</a>
                <a href="https://music.amazon.com/podcasts/d7c2cff1-9577-4aa8-8600-ab4e06c637f0/the-physilink-podcast" className="dn-contact-cta-button-3">Amazon Music</a>
                <a href="https://podcasts.apple.com/us/podcast/the-physilink-podcast/id1789244981" className="dn-contact-cta-button-3">Apple Podcast</a>
                </div>

                <div className="content-list">
                    {podcasts.map((podcast, index) => (
                        <div key={index} className="content-item">
                            <h3><b>{podcast.title}</b></h3>
                            <p>{podcast.description}</p>
                            <div className="podcast-player">
                                <iframe 
                                    src={podcast.embedSrc}
                                    width="100%"
                                    height="180"
                                    frameBorder="0"
                                    allow="autoplay; clipboard-write; encrypted-media"
                                    loading="lazy"
                                    title={podcast.title}
                                ></iframe>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="box">
                <h2 className="title">Webinars</h2>
                <div className="content-list">
                    {webinars.map((webinar, index) => (
                        <div key={index} className="content-item">
                            <h3><b>{webinar.title}</b></h3>
                            <p>{webinar.description}</p>
                            <div className="video-container">
                                <iframe
                                    width="100%"
                                    height="200"
                                    src={`https://www.youtube.com/embed/${getYouTubeVideoId(webinar.videoUrl)}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title={webinar.title}
                                ></iframe>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

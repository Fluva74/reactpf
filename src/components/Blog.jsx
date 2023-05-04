import React, { useState, useEffect } from "react";
import "./blog.css";
import axios from "axios";
import he from "he";



function Blog() {
  const [posts, setPosts] = useState([]);
  const [imageUrls, setImageUrls] = useState({});

  useEffect(() => {
    axios
      .get("http://manifestblogs.com/wp-json/wp/v2/posts?per_page=4", {
        auth: {
          username: import.meta.env.VITE_WP_USERNAME,
          password: import.meta.env.VITE_WP_PASSWORD,
          
        },
      })
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getImageUrl = (mediaId) => {
    if (imageUrls[mediaId]) {
      // The image URL has already been fetched, so return it
      return imageUrls[mediaId];
    } else {
      // The image URL hasn't been fetched yet, so fetch it and update the state
      return axios
      .get(`http://manifestblogs.com/wp-json/wp/v2/media/${mediaId}`, {
        auth: {
          username: import.meta.env.VITE_WP_USERNAME,
          password: import.meta.env.VITE_WP_PASSWORD,
        },
      })
        .then((response) => {
          const media = response.data;
          const imageUrl = media.source_url;
          setImageUrls((prevState) => ({
            ...prevState,
            [mediaId]: imageUrl,
          }));
          return imageUrl;
        })
        .catch((error) => {
          console.log(error);
          return "https://placehold.co/350x450";
        });
    }
  };

  const renderImage = (post) => {
    if (post.featured_media) {
      const mediaId = post.featured_media;
      const imageUrl = getImageUrl(mediaId);
      return <img src={imageUrl} alt={post.title.rendered} />;
    } else {
      return <img src="https://placehold.co/350x450" alt="" />;
    }
  };

  const renderExcerpt = (post) => {
    if (post.excerpt) {
      const decodedExcerpt = he.decode(post.excerpt.rendered);
      const excerptWithoutLink = decodedExcerpt.replace(
        /<a\b[^>]*>(.*?)<\/a>/i,
        ""
      );
      return (
        <div>
          <div dangerouslySetInnerHTML={{ __html: excerptWithoutLink }} />
        </div>
      );
    } else {
      return null;
    }
  };


  return (
    <div className="blogContainer">
      <h2 className="myThoughts">My Thoughts</h2>
      <div className="postContainer">
        {posts.map((post) => (
          <div className="blogPost" key={post.id}>
            <div className="postTop">{renderImage(post)}</div>
            <div className="postBottom">
              <h3 className="blogTitle">{he.decode(post.title.rendered)}</h3>
              {renderExcerpt(post)}
              <a href={post.link} className="readBlog" target="blank">
                READ MORE
              </a>
            </div>
          </div>
        ))}
      </div>
      <a href="https://manifestblogs.com/blog/" className="viewLink"><h3 className="viewAll">View All Posts</h3></a>
    </div>
  );
}

export default Blog;

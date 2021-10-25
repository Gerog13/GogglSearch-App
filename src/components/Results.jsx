import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { useResultContext } from "../contexts/ResultContextProvider";
import { Loading } from "./Loading";

export const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();
  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === "/videos") {
        getResults(`/search/q=${searchTerm} videos`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=60`);
      }
    }
  }, [searchTerm, location.pathname]);
  console.log(results);

  if (isLoading) return <Loading />;
  if (results.length === 0) return (
    <div className="flex items-center justify-center sm:text-2xl text-xl break-words mt-14 animate-pulse text-blue-900">
      <h2>Welcome to Goggl, make a search!</h2>
    </div>
  )

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56 pb-20">
          {results?.map(({ link, title }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <p className="text-sm">
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
    case "/images":
      return (
        <div className="flex flex-wrap justify-center items-center pb-20">
          {results?.map(({ image, link: { href, title } }, index) => (
            <a
              className="p-2 m-3 h-72 flex flex-col hover:shadow-md transition-all ease-in-out duration-100"
              href={href}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={image?.src} alt={title} loading="lazy" className="h-44 object-contain"/>
              <p className="w-36 break-words text-sm mt-2">{title}</p>
            </a>
          ))}
        </div>
      );
    case "/news":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56 items-center pb-20">
          {results?.map(({ links, id, source, title }) => (
            <div key={id} className="md:w-2/5 w-full">
              <a
                href={links?.[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <p className="text-lg dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
              <div className="flex gap-4">
                <a
                  href={source?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {source?.href}
                </a>
              </div>
            </div>
          ))}
        </div>
      );
    case "/videos":
      return (
        <div className="flex flex-wrap pb-20">
          {results?.map((video, index) => (
            <div key={index} className="p-2">
              {video?.additional_links?.[0]?.href && (
                <ReactPlayer
                  url={video.additional_links?.[0].href}
                  controls 
                  width="355px"
                  height="200px"
                />
              )}
            </div>
          ))}
        </div>
      );
  }
};

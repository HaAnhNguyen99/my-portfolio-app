import "./Portfolio.media.less";
import "./Portfolio.less";

import { useLayoutEffect, useState } from "react";
import { getProjects } from "../../../../libs/api/api";
import Loading from "../../../components/Loading";
import { Projects } from "./components/Projects";

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectData = await getProjects();
        setProjects(projectData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section className="py-16 border-t-2 border-black border-opacity-40 font-IBM min-h-svh">
      <div className="container mx-auto relative">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        {isLoading ? <Loading /> : <Projects projects={projects} />}
      </div>
    </section>
  );
}

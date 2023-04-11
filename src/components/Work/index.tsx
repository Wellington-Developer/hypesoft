import { WorksProps } from "@/../types/components/data/works"
import { BoxWork } from "../utils/BoxWork"
import { TitleCenter } from "../utils/TitleCenter/styles"
import { WorkContainer } from "./styles"
import { useState, useEffect } from 'react'

export const Work = () => {

    const [ projects, setProjects ] = useState<WorksProps[]>()

    const fetchProjects = async () => {
        const res = await fetch('/api/works')
        const projectsList = await res.json()

        setProjects(projectsList);
    }

    useEffect(() => {
        fetchProjects()
    }, [])
    
    console.log(projects)
    return (
        <WorkContainer className="container-default" id="works">
            <TitleCenter>
                <h1>My Selected Work</h1>
            </TitleCenter>
            <div className="work--container">
                {
                    projects && projects.map((project, index) => {
                        return (
                            <BoxWork text={project.title} link={project.link} img={project.img} key={ index }/>
                        )
                    })
                }
            </div>
        </WorkContainer>
    )
}
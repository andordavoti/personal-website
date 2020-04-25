import React, { useEffect, useState } from 'react'
import { firestore } from '../../firebase/firebase.utils'
import { useContext } from 'react'
import { ProjectContext } from '../../context'
import { useHistory } from 'react-router'

//Components
import Spinner from '../../components/Spinner/Spinner'
import { FaChevronLeft } from 'react-icons/fa'
import {
    ProjectWrapper,
    ProjectTitle,
    ProjectImg,
    Title,
    Item,
    Section,
    Img,
    Description,
    GoBack,
} from './Project.styles'

const WithSpinner = Spinner(ProjectWrapper)

const Project = ({ match }) => {
    const projects = useContext(ProjectContext)
    const [sections, setSections] = useState([])
    const [loading, setLoading] = useState(true)
    const history = useHistory()

    const { id } = match.params
    const project = projects[id] || {}

    useEffect(() => {
        const unsubscribe = firestore //Collect sections from firebase based on id.
            .collection('projects')
            .doc(id)
            .collection('sections')
            .onSnapshot(snapshot => {
                setLoading(false)
                if (!snapshot.size) return
                const sections = snapshot.docs.map(section => ({
                    id: section.id,
                    ...section.data(),
                }))
                setSections(sections)
                setLoading(false)
            })
        return () => unsubscribe()
    }, [id])

    return <WithSpinner isLoading={loading} message="Getting Project">
        <ProjectTitle>
            <GoBack onClick={() => history.push('/')}>
                <FaChevronLeft />
            </GoBack>
            <span>{project.title}</span>
        </ProjectTitle>
        <ProjectImg>
            <Img alt="Main project Image" src={project.imgUrl} />
        </ProjectImg>

        {sections &&
            sections.map(section => (
                <Section key={section.id}>
                    <Item>
                        <Title>{section.title}</Title>
                    </Item>
                    {section.imgUrl ? (
                        <Item>
                            <Img alt="Project Image" src={section.imgUrl} />
                        </Item>
                    ) : null}
                    {section.description ? (
                        <Item>
                            <Description>{section.description}</Description>
                        </Item>
                    ) : null}
                </Section>
            ))}
    </WithSpinner>
}

export default Project

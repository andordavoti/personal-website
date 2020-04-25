import React, { useContext } from 'react'
//Data
import { useHistory } from 'react-router'
import { ProjectContext } from '../../context'
//Components
import Card from '../Card/Card'
import CardContent from '../Card/CardContent'
import CardImg from '../Card/CardImg'
import { PortfolioWrapper } from '../PortfolioWrapper/PortfolioWrapper'

const Portfolio = () => {
    const history = useHistory()
    const projects = useContext(ProjectContext)
    const handleClick = id => history.push(`project/${id}`)

    return <PortfolioWrapper>
        {projects &&
            Object.values(projects).map(({ id, imgUrl, ...params }) => {
                const hover = true
                return <Card
                    onClick={() => handleClick(id)}
                    hover={hover}
                    key={id}>
                    <CardContent hover={hover} {...params} />
                    <CardImg src={imgUrl} />
                </Card>
            })}
    </PortfolioWrapper>
}

export default Portfolio
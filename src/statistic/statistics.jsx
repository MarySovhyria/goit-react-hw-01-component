import {
    StatisticWrap,
    Heading,
    StatList,
    StatItem,
    Label,
    Percentage
} from './statistic.styled'
import { getRandomHexColor } from './getRandomHexColor';

const Statistic = ({stat}) => {
    return (
        <StatisticWrap>
            <Heading>Statistic</Heading>
            <StatList>
                {stat.map(stat => (
                <StatItem
                    key={stat.id}
                    style={{ backgroundColor: getRandomHexColor() }}
                >
                    <Label>{stat.label}</Label>
                    <Percentage>{stat.percentage}%</Percentage>
                </StatItem>
                ))}
            </StatList>
            
        </StatisticWrap>
    )
    
}
export default Statistic
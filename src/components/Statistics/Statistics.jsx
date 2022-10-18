import PropTypes from 'prop-types';
import { getRandomHexColor } from 'js/randomColor';
import {
    Label,
    Percentage,
    StatItem,
    StatList,
    StatSection,
    StatsHeader,
  } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
    return (
        <StatSection>
            {title && <StatsHeader>{title}</StatsHeader>}
            <StatList>
            {stats.map(stat => (
                <StatItem key={stat.id} style={{ backgroundColor: getRandomHexColor() }}>
                    <Label>{stat.label}</Label>
                    <Percentage>{stat.percentage}</Percentage>
                </StatItem>
            ))}
            </StatList>
        </StatSection>
    );
};
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
        })
    ),
};
import PropTypes from 'prop-types';

import getRandomHexColor from './getRandomHexColor';
import {
  StatisticsBox,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';
export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsBox>
      <Title>{title}</Title>

      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <Item key={id} style={{ backgroundColor: getRandomHexColor() }}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </Item>
          );
        })}
      </StatList>
    </StatisticsBox>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

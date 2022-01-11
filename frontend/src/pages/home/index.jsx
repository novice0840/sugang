import * as React from 'react';
import { Container } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HomeIcon from '@mui/icons-material/Home';
import FoundationIcon from '@mui/icons-material/Foundation';
import StarIcon from '@mui/icons-material/Star';
import HomeSubjectList from 'layouts/HomeSubjectList';

const subjectList = [
  {
    code: 0,
    name: '과목 1',
    type: 'major',
    major: 'electronic',
    currentStudent: 0,
    maxStudent: 10,
    minGrade: 1,
    maxGrade: 4,
  },
  {
    code: 1,
    name: '과목 2',
    type: 'major',
    major: 'electronic',
    currentStudent: 0,
    maxStudent: 10,
    minGrade: 1,
    maxGrade: 4,
  },
  {
    code: 3,
    name: '과목 3',
    type: 'major',
    major: 'electronic',
    currentStudent: 0,
    maxStudent: 10,
    minGrade: 1,
    maxGrade: 4,
  },
];

export default function Home() {
  const [value, setValue] = React.useState(0);
  return (
    <Container maxWidth="lg" sx={{ mt: 12 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ justifyContent: 'space-between' }}
      >
        <BottomNavigationAction label="전체 과목" icon={<HomeIcon />} />
        <BottomNavigationAction label="전공 과목" icon={<StarIcon />} />
        <BottomNavigationAction label="교양 과목" icon={<MenuBookIcon />} />
        <BottomNavigationAction label="기초 과목" icon={<FoundationIcon />} />
      </BottomNavigation>
      <HomeSubjectList subjectList={subjectList} />
    </Container>
  );
}

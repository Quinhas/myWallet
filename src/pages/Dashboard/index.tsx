import { ContentHeader, SelectInput } from "../../components";
import { Container } from "./styles";

const Dashboard: React.FC = () => {
  const options = [
    {
      value: 'Ana', label: 'Ana',
    },
    {
      value: 'Lucas', label: 'Lucas',
    },
    {
      value: 'Rodrigo', label: 'Rodrigo',
    }
  ];

  return (
    <>
      <Container>
        <ContentHeader title={'Dashboard'} lineColor={'complementary'}>
          <SelectInput options={options} onChange={()=> {}}/>
        </ContentHeader>
      </Container>
    </>
  )
}

export default Dashboard;
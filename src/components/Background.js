import styled from 'styled-components';
import background from '../img/background.jpeg';

const Background = styled.img`
max-width: 100vw;
height:100vh;
`

function App() {
    return (
        <div>
            <Background src={background} />
        </div>
    );
}

export default App;

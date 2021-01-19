import Item from '../../components/item';
import { FloatingButton, ButtonContainer } from '../../shared/uibuttons';

function Items() {
    return (
        <ButtonContainer>
        <div>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <FloatingButton secondary>+</FloatingButton>
        </div>
        </ButtonContainer>
    );
}

export default Items;
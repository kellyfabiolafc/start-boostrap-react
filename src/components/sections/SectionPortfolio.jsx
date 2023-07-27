import { Title } from '../Title';
import { Container } from '../Container';
import style from '../../css-modules/SectionPortfolio.module.css';
export const SectionPortfolio = ({ id }) => {
    return (
        <div id={id} className={style['section-portfolio']}> 
            <Container >
                <section  >
                    <Title className={style['section-contact__title']} >PORTFOLIO</Title>
                </section>
            </Container>
        </div>
    );
};

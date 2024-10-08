import { ApplicationButton } from '../../components/ApplicationButton/ApplicationButton';
import { Container } from '../../components/Container/Container';
import { Header } from '../../components/Header/Header';
import { Logo } from '../../components/Logo/Logo';
import { Button } from '../../ui/Button/Button';
import s from './ApplicationSent.module.scss';

export const ApplicationSent = () => {
  return (
    <article className={s.sent}>
      <Header className={s.header} />
      <Logo className={s.logo} />

      <Container className={s.about}>
        <figure className={s.icon}>
          <svg
            width='64'
            height='64'
            viewBox='0 0 64 64'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M32 64C40.4869 64 48.6263 60.6286 54.6274 54.6274C60.6286 48.6263 64 40.4869 64 32C64 23.5131 60.6286 15.3737 54.6274 9.37258C48.6263 3.37142 40.4869 0 32 0C23.5131 0 15.3737 3.37142 9.37258 9.37258C3.37142 15.3737 0 23.5131 0 32C0 40.4869 3.37142 48.6263 9.37258 54.6274C15.3737 60.6286 23.5131 64 32 64ZM46.125 26.125L30.125 42.125C28.95 43.3 27.05 43.3 25.8875 42.125L17.8875 34.125C16.7125 32.95 16.7125 31.05 17.8875 29.8875C19.0625 28.725 20.9625 28.7125 22.125 29.8875L28 35.7625L41.875 21.875C43.05 20.7 44.95 20.7 46.1125 21.875C47.275 23.05 47.2875 24.95 46.1125 26.1125L46.125 26.125Z'
              fill='#22C55E'
            />
          </svg>
        </figure>

        <h1 className={s.title}>Заявка отправлена успешно!</h1>

        <p className={s.text}>
          Наши менеджеры свяжутся с вами в ближайшее время!
        </p>
      </Container>

      <Button className={s.button} to='/'>
        Вернуться на сайт
      </Button>
      
      <ApplicationButton className={s.buttonMobile} to="/" textContent="Вернуться на сайт" />
    </article>
  );
};

import type { FC } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectBeanById } from "../../app/reducers/beanSlice";
import styles from "./SingleBeanPage.module.scss";
import clsx from "clsx";

const SingleBeanPage: FC = () => {
  const { beanId } = useParams();
  const bean = useAppSelector(state => selectBeanById(state, +beanId!));

  const navigate = useNavigate();
  function handleBack() {
    navigate(-1);
  }

  if (!bean) {
    return (
      <main>
        <h2 className={clsx(styles.bean__title)}>Beans not found by id!</h2>
        <button className={clsx(styles.bean__back)} onClick={handleBack}>
          Go back to beans!
        </button>
      </main>
    );
  }

  return (
    <main>
      <article className={clsx(styles.bean)}>
        <h2 className={clsx(styles.bean__title)}>{bean.flavorName}</h2>
        <p className={clsx(styles.bean__description)}>{bean.description}</p>
        <img src={bean.imageUrl} alt={bean.flavorName} />
        <h3 className={clsx(styles.bean__titlelist)}>Ingredients:</h3>
        <ul className={clsx(styles.bean__list)}>
          {bean.ingredients.map((e: string, i: number) => (
            <li key={i}>
              <p className={clsx(styles.bean__item)}>{e}</p>
            </li>
          ))}
        </ul>
        <button className={clsx(styles.bean__back)} onClick={handleBack}>
          Back to beans &#8594;
        </button>
      </article>
    </main>
  );
};
export default SingleBeanPage;

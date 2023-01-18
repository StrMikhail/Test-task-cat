import styles from './Container.module.scss';
import { Card } from '../../components/Card/Card';
import { IProduct } from '../../interfaces/product.interface';
import data from '../../data/data.json'

export const Container = () : JSX.Element => {
    const products:IProduct[] = data
    return (
        <div className={styles.container}>
          {products.map(product => 
          <Card 
            key={product.ingredient} 
            ingredient={product.ingredient}
            weight={product.weight}
            message={product.message}
            options={product.options}
            avalible={product.avalible}
            /> )}
        </div>
    ); 
};


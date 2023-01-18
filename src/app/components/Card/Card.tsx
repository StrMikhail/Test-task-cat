import { useState } from 'react';
import styles from './Card.module.scss'
import cn from 'classnames';
import { P } from '../P/P';
import { IProduct } from '../../interfaces/product.interface';

export const Card = ({ingredient, weight, message, options, avalible}:IProduct):JSX.Element => {
    const [text, setText] = useState({title:'Сказочное заморское яство', message: 'asd'})
    const [mode, setMode] = useState( avalible ? 'default' : 'empty')
    const handleGetProduct = () => {
        if (mode === 'empty') return
        if (mode === 'selected') {
            setMode('default')
            setText(prev =>({...prev, title: 'Сказочное заморское яство'}))
        } else {
            setMode('selected')
        }
    }
    const handleEnter = () => {
        if (mode === 'selected') {
            setText(prev =>({...prev, title: 'Котэ не одобряет?'}))
        }
    }
    const handleLeave = () => {
        if (mode === 'selected') {
            setText(prev =>({...prev, title: 'Сказочное заморское яство'}))
        }
    }
    return (
        <div className={styles.field}>
        <div
            onClick={handleGetProduct}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className={cn(styles.card, {
                [styles.default]: mode === 'default',
                [styles.selected]: mode === 'selected',
                [styles.empty]: mode === 'empty'
        })}>
            <div className={styles.content}>
            <P 
                size='s' 
                className={styles.label}
                >
                {text.title}
            </P>
                <div className={styles.title}>
                    <P size='l'>Нямушка</P>
                    <P size='m'>c {ingredient}</P>
                </div>
                <div className={styles.options}>
                    {options.portions && <P size='s'>
                        <span><b>{options.portions}</b></span>
                        <span> порций</span>
                    </P>}
                    {options.mouse && <P size='s'>
                        <span><b>{options.mouse}</b></span>
                        <span> мыши в подарок</span>
                    </P>}
                    {options.text && <P size='s'>
                        <span>{options.text}</span>
                    </P>}
                </div>
                <div className={styles.weight}>
                    <p>{weight}
                        <span><br/>кг</span>
                    </p>
                </div>
            </div>
        </div>
        <div className={styles.footer}>\
            {mode === 'default' && <P size='s'>Чего сидишь? Порадуй котэ, <span className={styles.buy}  onClick={handleGetProduct}>купи</span></P>}
            {mode === 'selected' && <P size='s'>{message}</P>}
            {mode === 'empty' && <P size='s' className={styles.empty_footer} >Печалька, с {ingredient} закончился</P>}
        </div>
       </div>
    );
};

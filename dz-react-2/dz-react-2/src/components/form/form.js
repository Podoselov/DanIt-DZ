import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './formStyle.scss';
import { useDispatch, useSelector } from 'react-redux';
import { buyCards } from '../../store/actions';

const BuyForm = () => {
  const dispatch = useDispatch();

  const stateBuyCards = useSelector((state) =>
    state.cards.all.filter(({ buy }) => buy)
  );
  const SignupSchema = Yup.object().shape({
    userName: Yup.string()
      .typeError('You must specify a number')
      .required('Not correct'),
    userSurName: Yup.string().required('Not correct'),
    userAge: Yup.number()
      .typeError('You must specify a number')
      .required('Not correct'),
    userAddress: Yup.string().required('Not correct'),
    userPhone: Yup.number()
      .typeError('You must specify a number')
      .required('Not correct'),
  });

  return (
    <Formik
      initialValues={{
        userName: '',
        userSurName: '',
        userAge: '',
        userAddress: '',
        userPhone: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        console.log(stateBuyCards);
        console.log(JSON.stringify(values));
        actions.resetForm();
        dispatch(buyCards(stateBuyCards));
      }}
    >
      <Form className='buy__form'>
        <h2>Make a purchase</h2>

        <label htmlFor='userName'>Enter your name</label>
        <Field id='userName' name='userName' placeholder='Name' />
        <ErrorMessage className='name error' name='userName' component='div' />

        <label htmlFor='userSurName'>Enter your surname</label>
        <Field id='userSurName' name='userSurName' placeholder='Last Name' />
        <ErrorMessage
          className='surname error'
          name='userSurName'
          component='div'
        />

        <label htmlFor='userAge'>Enter your age</label>
        <Field id='userAge' name='userAge' placeholder='Age' />
        <ErrorMessage className='age error' name='userAge' component='p' />

        <label htmlFor='userAddress'>Enter your address</label>
        <Field id='userAddress' name='userAddress' placeholder='Address' />
        <ErrorMessage
          className='address error'
          name='userAddress'
          component='div'
        />

        <label htmlFor='userPhone'>Enter your phone</label>
        <Field id='userPhone' name='userPhone' placeholder='Phone' />
        <ErrorMessage
          className='phone error'
          name='userPhone'
          component='div'
        />
        <button type='submit'>Checkout</button>
      </Form>
    </Formik>
  );
};

export default BuyForm;

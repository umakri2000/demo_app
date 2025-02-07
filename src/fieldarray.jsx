import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

function DynamicForm() {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
        users: [{title:''}]
      }
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'users',
  });

  const onSubmit = (data) => {
    console.log(data); // Submits the data
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        
        <div key={field.id}>
          <input
            {...register(`users.${index}.name`)} // Dynamic name for each input
            placeholder="title"
          />
          <button type="button" className='button bmar-10' onClick={() => remove(index)}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={() => append({ name: '' })}>
        Add User
      </button>
      <input type="submit" />
    </form>
  );
}

export default DynamicForm;

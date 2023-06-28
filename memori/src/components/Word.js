import React, {useState} from 'react';
import './Word.css';

const Word = () => {
  const [category, setCategory] = useState([]);
  const [Data, setData] = useState([]);

  const handleCategory = (e) => {
    e.preventDefault();
    const input = document.getElementById("input-cat");
    const newCategory = input.value;
    setCategory((oldArray) => [...oldArray, newCategory]);
    input.value = ''; // Clear the input field
  }

  const handleData = (e) => {
    e.preventDefault();
    const newSource = document.getElementById('input-source').value;
    const newQuote = document.getElementById('input-quote').value;
    const newPage = document.getElementById('input-page').value;
    const newThoughts = document.getElementById('input-thoughts').value;
    const newDate = document.getElementById('input-date').value;

    const newData = {
      source: newSource,
      quote: newQuote,
      page: newPage,
      thoughts: newThoughts,
      date: newDate
    };

    setData((oldData) => [...oldData, newData]);
    document.getElementById('form_data').reset();
  }

  return (
    <section className='d-flex'>
      <div id='sourceName'>
          <h3>category</h3>

          {
            category.map((cat) => (
              <div className='category' key={cat}>{cat}</div>
            ))
          }
          <div>
            <form id="form-cat">
              <input
                id="input-cat"
                type="text"
                placeholder='Enter a category...'
                autoComplete='off'
              />
              <input
                onClick={handleCategory}
                type="submit"
                hidden
              />
            </form>
          </div>
      </div>
      <div id='sourceData'>
        <table>
          <colgroup>
            <col className="twentyfive"></col>
            <col className='thirtyfive'></col>
            <col className='ten'></col>
            <col className='twenty'></col>
            <col className='ten'></col>
          </colgroup>
          <thead>
            <tr>
              <th>source</th>
              <th>quote</th>
              <th>page</th>
              <th>thoughts</th>
              <th>date</th>
            </tr>
          </thead>
          <tbody>
            {
              Data.map((item, index) => (
                <tr key={index}>
                  <td>{item.source}</td>
                  <td>{item.quote}</td>
                  <td>{item.page}</td>
                  <td>{item.thoughts}</td>
                  <td>{item.date}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <form id="form_data" onSubmit={handleData}>
          <input
            id='input-source'
            placeholder='source'
            form='form_data'
            type='text'
            autoComplete='off'
          />
          <input
            id='input-quote'
            placeholder='quote'
            form='form_data'
            type='text'
            autoComplete='off'
          />
          <input
            id='input-page'
            placeholder='page'
            form='form_data'
            type='number'
            autoComplete='off'
          />
          <input
            id='input-thoughts'
            placeholder='thoughts'
            form='form_data'
            type='text'
            autoComplete='off'
          />
          <input
            id='input-date'
            placeholder='date'
            form='form_data'
            type='date'
            autoComplete='off'
          />
          <input
            type="submit"
            hidden
          />
        </form>
      </div>
    </section>
  )
}

export default Word;

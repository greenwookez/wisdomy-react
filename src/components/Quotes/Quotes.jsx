import React, { useState, useEffect, useCallback } from 'react';

import Quote from './Quote';
import prepareResponse from '../../utils/prepareResponse'
import quotesApi from '../../services/api/quotesApi'
import SwipeableList from '../SwipeableList';
import { castAnimation } from '../../utils/castAnimation'

const Quotes = () => {
  const [quotes, setQuotes] = useState(null)

  const fetch = useCallback(async () => {
    const response = await quotesApi.getQuotes({
      page: {
        size: 50,
        page: 1,
      }
    })

    setQuotes(prepareResponse(response))
  }, [quotesApi])

  useEffect(() => {
    fetch()
  }, [fetch])

  if (!quotes) {
    castAnimation(1);
    const author = {
      name: "Разработчики"
    }
    setTimeout(() => castAnimation(0), 200);
    return (
      <Quote text="Чтобы Арни уважал, клади гантель туда, где брал! (Цитаты подгружаются)" author={author}/>
    );
  }

  console.log(quotes)

  castAnimation(1);
  return (
    <SwipeableList
      list={quotes}
      renderItem={Quote}
    />
  )
};

export default Quotes;

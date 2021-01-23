import React, { useState, useEffect, useCallback } from 'react';

import Quote from './Quote';
import prepareResponse from '../../utils/prepareResponse'
import quotesApi from '../../services/api/quotesApi'
import SwipeableList from '../SwipeableList';

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
    return null;
  }

  return (
    <SwipeableList
      list={quotes}
      renderItem={Quote}
    />
  )
};

export default Quotes;
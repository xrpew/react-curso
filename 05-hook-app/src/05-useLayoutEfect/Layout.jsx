import { useFetch, useCounter } from "../Hooks";
import { LoadingQuote, Quote } from "../03-examples";

export const Layout = () => {
  const { counter, increment } = useCounter();

  const { data, isLoadin, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  //   console.log(data, isLoadin, hasError, counter)
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {
      isLoadin ? <LoadingQuote /> 
      : <Quote author={author} quote={quote} />
      }

      <button
        className="btn btn-primary"
        disabled={isLoadin}
        onClick={() => increment()}
      >
        Next Quote
      </button>
    </>
  );
};

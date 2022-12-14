import { useSelector } from "react-redux";
import CodeBlock from "./CodeBlock";

import InfiniteScroll from "react-infinite-scroll-component";

const QuestionList = () => {
  const questionState = useSelector((state) => state);

  console.log(questionState);
  return (
    <div
      className="d-flex flex-column p-3  w-75"
      style={{
        border: "1px solid",
        overflowY: "scroll",
      }}
    >
      <InfiniteScroll dataLength={10}>
        {questionState.map((q, i) => (
          <div key={i} className="card m-2">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span>Q {i + 1}- </span> {q.question}
              </li>
              <li className="list-group-item">
                {q.codeVisibility ? (
                  <div>
                    <CodeBlock code={q.codeQuestion} />
                  </div>
                ) : null}
              </li>
              <li className="list-group-item">
                {/* show action in input radio or checkbox */}
                {q.typeOption
                  ? q.option.map((op, index) => (
                      <div key={index}>
                        <input type="checkbox" />

                        {op.name}
                      </div>
                    ))
                  : q.option.map((op, index) => (
                      <div key={index}>
                        <input type="checkbox" />

                        {op.name}
                      </div>
                    ))}
              </li>
            </ul>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default QuestionList;

import { PostProps } from "../components/Post";

type ListProps = {
  data: Post[];
  Component: React.FC<PostProps>;
  horizontal?: boolean;
};

const List: React.FC<ListProps> = ({ data, Component, horizontal }) => {
  function renderData() {
    return data.map((d, i) => <Component key={d.date || i} data={d} />);
  }

  return (
    <>
      <ul className={horizontal ? "horizontal" : ""}>{renderData()}</ul>
      <style jsx>
        {`
          ul {
            width: 100%;
            list-style: none;
            display: flex;
            flex-direction: column;
          }
          ul.horizontal {
            flex-direction: row;
          }
        `}
      </style>
    </>
  );
};

export default List;

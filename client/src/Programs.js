import React from "react";

import gql from "graphql-tag";
import { Query } from "react-apollo";
import "./App.css";

const PROGRAMS_QUERY = gql`
  query userPrograms {
    program {
      id
      name
    }
  }
`;

// const changeRoute = route => {
//   console.log(route);
// };

// client.query({ query: testQuery }).then(res => console.log(res));

function App() {
  return (
    <Query query={PROGRAMS_QUERY}>
      {({ loading, data }) => {
        if (loading) return "Loading ...";
        const { program } = data;
        console.log(program);
        return program.map(program => (
          <>
            <p>{program.name}</p>
            <p>{program.id}</p>
          </>
        ));
      }}
    </Query>
  );
}

export default App;

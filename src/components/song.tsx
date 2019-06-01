import React from "react";

interface State {
  metadata: object;
  measures: object[];
}

export default class Song extends React.Component<{}, State> {
  public state: State = {
    metadata: {
      title: "test song title",
      artist: "test artist",
      key: "A"
    },
    measures: [
      {
        measureNumber: 1,
        chord: "1"
      },
      {
        measureNumber: 2,
        chord: "2"
      }
    ]
  };
}

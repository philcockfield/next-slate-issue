import * as React from 'react';
const slate = require('slate');
const { Editor, Raw } = slate;


export default (props: any) => <EditorWrapper />;



export interface IEditorWrapperProps { }
export interface IEditorWrapperState {
  state: any;
}
export class EditorWrapper extends React.Component<IEditorWrapperProps, IEditorWrapperState> {
  public state = {
    state: initialState,
  };

  public render() {
    return (
      <div>
        <h1>Slate Editor</h1>
        <Editor
          state={this.state.state}
          onChange={this.onChange}
        />
      </div>
    );
  }

  private onChange = (state: any) => {
    this.setState({ state });
  }
}


const initialState = Raw.deserialize({
  nodes: [
    {
      kind: 'block',
      type: 'paragraph',
      nodes: [
        {
          kind: 'text',
          text: 'A line of text in a paragraph.',
        },
      ],
    },
  ],
}, { terse: true });

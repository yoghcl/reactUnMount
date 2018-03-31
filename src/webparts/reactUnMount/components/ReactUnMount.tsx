import * as React from 'react';
import styles from './ReactUnMount.module.scss';
import { IReactUnMountProps } from './IReactUnMountProps';
import { escape } from '@microsoft/sp-lodash-subset';

const LogSource = "***ReactUnMount";

export default class ReactUnMount extends React.Component<IReactUnMountProps, {}> {
  constructor(props) {
    super(props);
  }

  public componentDidMount() {
    console.log(`${LogSource} componentDidMount Invoked`);
  }

  public componentWillUnmount() {
    console.log(`${LogSource} componentWillUnMount Invoked`);
  }

  public componentWillReceiveProps() {
    console.log(`${LogSource} componentWillReceiveProps Invoked`);
  }

  public render(): React.ReactElement<IReactUnMountProps> {
    return (
      <div className={ styles.reactUnMount }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

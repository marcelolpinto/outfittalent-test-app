import * as React from 'react';
import { LaunchListQuery } from '../../types/queries';
import './styles.css';

interface Props {
  data: LaunchListQuery;
}

const className = 'LaunchList';

enum Status {
  UPCOMING = "UPCOMING",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED"
}

enum StatusLabels {
  UPCOMING = "Upcoming",
  SUCCESS = "Succeeded",
  FAILED = "Failed",
}

const getStatus = (launchSuccess: boolean, upcoming: boolean): Status => {
  if (upcoming) {
    return Status.UPCOMING;
  }

  if (launchSuccess) {
    return Status.SUCCESS;
  }

  return Status.FAILED;
}


const LaunchList = ({ data }: Props) => (
  <ol className={`${className}__list`}>
    {data.launches &&
      data.launches.map(
        (launch, i) => {
          if (!launch) return null;

          const status = getStatus(launch.launch_success, launch.upcoming);

          return (
            <li key={`launch-${i}`} className={`${className}__item`}>
              <h2>{launch.mission_name}</h2>
              {launch.details && (
                <p>{launch.details}</p>
              )}
              {launch.launch_date_utc && (
                <p><b>Launch Date:</b> {new Date(launch.launch_date_utc).toString()}</p>
              )}
              <p className={`status -${status}`}><b>Status:</b> {StatusLabels[status]}</p>
            </li>
          )
        }
      )}
  </ol>
);

export default LaunchList;
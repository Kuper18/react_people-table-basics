import React from 'react';
import cn from 'classnames';

import { Link, useParams } from 'react-router-dom';
import { Person } from '../../types';
import { PersonLink } from '../PersonLink/PersonLink';

type Props = {
  people: Person[];
};

export const PeopleTable: React.FC<Props> = ({ people }) => {
  const { personSlug } = useParams();

  return (
    <table
      data-cy="peopleTable"
      className="table is-striped is-hoverable is-narrow is-fullwidth"
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Sex</th>
          <th>Born</th>
          <th>Died</th>
          <th>Mother</th>
          <th>Father</th>
        </tr>
      </thead>

      <tbody>
        {people.map(person => {
          const {
            name,
            sex,
            born,
            died,
            fatherName,
            motherName,
            slug,
          } = person;
          const findMother = people.find(per => per.name === motherName);
          const findFather = people.find(per => per.name === fatherName);

          return (
            <tr
              data-cy="person"
              key={slug}
              className={cn({ 'has-background-warning': slug === personSlug })}
            >
              <td>
                <Link
                  to={`/people/${slug}`}
                  className={cn({ 'has-text-danger': sex === 'f' })}
                >
                  {name}
                </Link>
              </td>

              <td>{sex}</td>
              <td>{born}</td>
              <td>{died}</td>

              <td>
                {findMother ? (
                  <PersonLink person={findMother} />
                ) : (
                  motherName
                )}

                {!motherName && '-'}
              </td>

              <td>
                {findFather ? (
                  <PersonLink person={findFather} />
                ) : (
                  fatherName
                )}

                {!fatherName && '-'}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

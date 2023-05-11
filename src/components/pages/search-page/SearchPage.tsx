import React from 'react';

const SearchPage = () => {
  return (
    <div className='container_on_search_page'>
    <table className="table table-hover">
      <thead>
        <tr className="gray-bg text-white">
          <th scope="col">#</th>
          <th scope="col">Product Picture</th>
          <th scope="col">Title</th>
          <th scope="col">Text</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}

export default SearchPage;


export function nameToMutations(name) {
  return {
    [name](state, data) {
      state[name] = data
    },
    [name.slice(0, -1)](state, data) {
      state[name.slice(0, -1)] = data
    }
  }
}

export function mutatationNameToActions(name) {
  return {
    [`get${capitalizeFirstLetter(name)}`]({ commit }) {
      return request(name).then(data => {
        commit(name, data)
      })
    },
    [`get${capitalizeFirstLetter(name.slice(0, -1))}`]({ commit }, { id }) {
      return request(`${name}/${id}`).then(data => {
        commit(name.slice(0, -1), data)
        return data
      })
    },
    [`put${capitalizeFirstLetter(name.slice(0, -1))}`]({ commit }, { data }) {
      return request(name, 'POST', data);
    },
    [`update${capitalizeFirstLetter(name.slice(0, -1))}`]({ commit }, { id, data }) {
      return request(`${name}/${id}`, 'PUT', data)
    },
    [`delete${capitalizeFirstLetter(name.slice(0, -1))}`]({ commit }, { id }) {
      return request(`${name}/${id}`, 'DELETE')
    },
  }
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function request(url, method = 'GET', data, options) {
  const backUrl = 'http://localhost:3000';

  let _options = {
    method,
    mode: 'cors',
    redirect: 'follow',
    headers: new Headers({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json; charset=UTF-8'
    }),
    ...options
  };

  if (data) {
    _options.body = JSON.stringify(data);
  }

  const request = new Request(`${backUrl}/${url}`, _options);

  return fetch(request).then(res => {
    return res.text()
  }).then(text => {
    return Promise.resolve(JSON.parse(text));
  });
}
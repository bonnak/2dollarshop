import { useState, useCallback } from 'react';
import { Errors } from 'form-backend-validation';

export default function DealForm({ errorsProps }) {
  const [errors] = useState(new Errors(errorsProps));
  const [payload, setPayload] = useState({
    title: '',
    body: '',
    tags: [],
  });
  const submitForm = useCallback((evt) => {
    console.log(evt)
  }, [])

  return (
    <form onSubmit={submitForm}>
      <div className="form-group">
        <label className="form-label">Title *</label>
        <input        
          type="text"
          className="form-control"
          value={payload.title}
          onChange={e => setPayload({...payload, title: e.target.value})}
        />
        {errors.has('title') && <small class="text-danger form-text">{error.first('title')}</small>}
      </div>
      <div className="form-group">
        <label className="form-label">Title *</label>
        <textarea
          type="text"
          className="form-control"
          value={payload.body}
          onChange={e => setPayload({...payload, body: e.target.value})}
        ></textarea>
        {errors.has('body') && <small class="text-danger form-text">{error.first('body')}</small>}
      </div>
      <button type="submit" className="btn btn-primary">Save</button>
    </form>
  )
}
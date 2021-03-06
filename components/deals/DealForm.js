import { useState, useEffect } from 'react';
import { Errors } from 'form-backend-validation';

export default function DealForm({ validationErrors, onSubmit, deal }) {
  const initialPayload = {
    title: '',
    body: '',
    tags: [],
    externalLink: '',
  };
  const [payload, setPayload] = useState(initialPayload);
  const submitForm = (evt) => {
    evt.preventDefault();
    onSubmit(payload);
  };
  const errors = new Errors(validationErrors);

  useEffect(() => {
    if (!validationErrors) setPayload(initialPayload);
  }, [validationErrors]);

  useEffect(() => {
    if(deal) {
      setPayload(deal);
    }
  }, [deal]);

  return (
    <form onSubmit={submitForm}>
      <div className="form-group">
        <label className="form-label">Title *</label>
        <input
          type="text"
          className="form-control"
          value={payload.title}
          onChange={(e) => setPayload({ ...payload, title: e.target.value })}
        />
        {errors.has('title') && <small className="text-danger form-text">{errors.first('title')}</small>}
      </div>
      <div className="form-group">
        <label className="form-label">Body *</label>
        <textarea
          type="text"
          className="form-control"
          value={payload.body}
          onChange={(e) => setPayload({ ...payload, body: e.target.value })}
        ></textarea>
        {errors.has('body') && <small className="text-danger form-text">{errors.first('body')}</small>}
      </div>
      <div className="form-group">
        <label className="form-label">Link *</label>
        <input
          type="text"
          className="form-control"
          value={payload.externalLink}
          onChange={(e) => setPayload({ ...payload, externalLink: e.target.value })}
        />
        {errors.has('externalLink') && <small className="text-danger form-text">{errors.first('externalLink')}</small>}
      </div>
      <button type="submit" className="btn btn-primary">Save</button>
    </form>
  );
}

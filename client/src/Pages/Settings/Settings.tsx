export default function Settings() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 offset-md-3 col-xs-12">
          <h1 className="text-xs text-center">Your settings</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="profile-pic" className="form-label">
                URL of profile picture
              </label>
              <input type="text" className="form-control" id="profile-pic" />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input type="username" className="form-control" id="username" />
            </div>
            <div className="mb-3">
              <label htmlFor="bio" className="form-label">
                Short bio about you
              </label>
              <textarea className="form-control" id="bio" rows={8}></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input type="text" className="form-control" id="username" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="password" />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

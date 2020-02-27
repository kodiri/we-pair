import React from "react";

export default function HeadingFeature() {
  return (
    <div>
      <div>
        <div className="stack">
          <div>User</div>
          <div>Programming Language</div>
          <div>Location</div>
          <div>Next available Date</div>
        </div>
        {this.props.filteredUsers &&
          this.props.filteredUsers.map(profile => profile)}
      </div>

      <div>{this.props.filteredLocation}</div>
    </div>
  );
}

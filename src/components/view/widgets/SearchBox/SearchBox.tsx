import React from 'react';

interface ISearchBoxProps {
    placeholder?: string,
    className?: string,
    value: string | number;
    onChange: any;
};

class SearchBox extends React.Component<ISearchBoxProps> {
    render() {
        return <input type="search" {...this.props} />
    }
}

export { SearchBox }
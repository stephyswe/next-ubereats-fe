# test

# empty div

const { container } = render(<Spacer length={3} index={2} />);
expect(container).toContainHTML('<div />');

# className

const element = screen.getByTestId('ui-spacer');
expect(element).toHaveClass('m-0 flex-shrink-0');

# attribute

expect('/').toBe(link.getAttribute('href'));

# element text

expect('Home').toBe(link.textContent);

# role - textContent

const title = screen.getByRole('heading');
expect(title).toHaveTextContent('testTitle');

# role/name - exist

const logo = screen.getByRole('img', { name: 'uber-logo' });
expect(logo).toBeInTheDocument();

# id - length

const spacer = screen.getAllByTestId('ui-spacer');
expect(spacer).toHaveLength(2);

# item

describe('props', () => {
test('data', () => {
const dataItem = HomeData.employmentData[0];
render(<EmploymentList data={[HomeData.employmentData[0]]} />);

    expect(screen.getByText(dataItem.title)).toBeInTheDocument();
    expect(screen.getByText(dataItem.desc)).toBeInTheDocument();

    const element = screen.getByRole('link', { name: 'employment-link' });
    expect(element).toHaveAttribute('href', dataItem.link);

    const image = screen.getByRole('img', { name: dataItem.title });
    expect(image).toHaveAttribute('alt', dataItem.title);

});
});

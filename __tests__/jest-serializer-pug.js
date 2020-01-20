const jestSerializerPug = require('../jest-serializer-pug');
const html = require('../html');

expect.addSnapshotSerializer(jestSerializerPug);
test('type: string', () => {
  expect(html.string).toMatchInlineSnapshot(`
    div
      .field
        label.label Username
        .control.has-icons-left.has-icons-right
          input.input.is-success(type="text", placeholder="Text input", value="bulma")
          span.icon.is-small.is-left
            i.fas.fa-user
          span.icon.is-small.is-right
            i.fas.fa-check
        p.help.is-success This username is available
      .field
        label.label Message
        .control
          textarea.textarea(placeholder="Textarea")
      .field
        .control
          label.checkbox
            input(type="checkbox")
            | 
    I agree to the 
            a(href="#") terms and conditions
      .field
        .control
          label.radio
            input(type="radio", name="question")
            | 
    Yes

          label.radio
            input(type="radio", name="question")
            | 
    No

      .field.is-grouped
        .control
          button.button.is-link Submit
        .control
          button.button.is-link.is-light Cancel
  `);
});

test('type: String', () => {
  expect(html.stringClass).toMatchInlineSnapshot(`
    div
      .field
        label.label Username
        .control.has-icons-left.has-icons-right
          input.input.is-success(type="text", placeholder="Text input", value="bulma")
          span.icon.is-small.is-left
            i.fas.fa-user
          span.icon.is-small.is-right
            i.fas.fa-check
        p.help.is-success This username is available
      .field
        label.label Message
        .control
          textarea.textarea(placeholder="Textarea")
      .field
        .control
          label.checkbox
            input(type="checkbox")
            | 
    I agree to the 
            a(href="#") terms and conditions
      .field
        .control
          label.radio
            input(type="radio", name="question")
            | 
    Yes

          label.radio
            input(type="radio", name="question")
            | 
    No

      .field.is-grouped
        .control
          button.button.is-link Submit
        .control
          button.button.is-link.is-light Cancel
  `);
});

test('type: Element', () => {
  expect(html.element).toMatchInlineSnapshot(`
    div
      .field
        label.label Username
        .control.has-icons-left.has-icons-right
          input.input.is-success(type="text", placeholder="Text input", value="bulma")
          span.icon.is-small.is-left
            i.fas.fa-user
          span.icon.is-small.is-right
            i.fas.fa-check
        p.help.is-success This username is available
      .field
        label.label Message
        .control
          textarea.textarea(placeholder="Textarea")
      .field
        .control
          label.checkbox
            input(type="checkbox")
            | 
    I agree to the 
            a(href="#") terms and conditions
      .field
        .control
          label.radio
            input(type="radio", name="question")
            | 
    Yes

          label.radio
            input(type="radio", name="question")
            | 
    No

      .field.is-grouped
        .control
          button.button.is-link Submit
        .control
          button.button.is-link.is-light Cancel
  `);
});

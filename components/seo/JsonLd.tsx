/**
 * Renders one or more schema.org objects as a JSON-LD script tag.
 *
 * The `<` escape stops a string inside the data (an apostrophe-free `</script>`
 * in some future FAQ answer, say) from closing the tag early and breaking the
 * page.
 */
export default function JsonLd({ schema }: { schema: object | object[] }) {
  const blocks = Array.isArray(schema) ? schema : [schema];

  return (
    <>
      {blocks.map((block, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(block).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}

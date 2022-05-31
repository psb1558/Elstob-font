<xsl:stylesheet version="1.0"
 xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:output method="xml" version="1.0" encoding="UTF-8"/>

    <xsl:template match="node()|@*">
      <xsl:copy>
         <xsl:apply-templates select="node()|@*"/>
      </xsl:copy>
    </xsl:template>

    <xsl:template match="instance[starts-with(@stylename,'Grade') or
       contains(@stylename,'pt Light') or
       contains(@stylename,'pt Extra') or
       contains(@stylename,'pt Medium') or
       contains(@stylename,'pt SemiBold') or
       contains(@stylename,'Slant')]"/>

</xsl:stylesheet>

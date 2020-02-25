<xsl:stylesheet version="1.0"
 xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:output method="xml" version="1.0" encoding="UTF-8"/>

    <xsl:template match="node()|@*">
      <xsl:copy>
         <xsl:apply-templates select="node()|@*"/>
      </xsl:copy>
    </xsl:template>

    <xsl:template match="instance[starts-with(@stylename,'6pt') or
			 starts-with(@stylename,'Grade') or
			 contains(@stylename,'8pt') or
			 starts-with(@stylename,'14pt') or
			 starts-with(@stylename,'10pt')]"/>
    
</xsl:stylesheet>

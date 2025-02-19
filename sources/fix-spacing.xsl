<xsl:stylesheet version="1.0"
 xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:output method="xml" version="1.0" encoding="UTF-8"/>
    <xsl:param name="sp" select="0"/>

    <xsl:template match="node()|@*">
      <xsl:copy>
         <xsl:apply-templates select="node()|@*"/>
      </xsl:copy>
    </xsl:template>

    <xsl:template match="instance/location/dimension[@name='Spacing']/@xvalue">
      <xsl:attribute name="xvalue">
        <xsl:value-of select="$sp"/>
      </xsl:attribute>
    </xsl:template>
</xsl:stylesheet>
